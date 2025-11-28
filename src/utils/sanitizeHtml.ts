/**
 * Simple HTML sanitizer for blog content
 * Allows only safe HTML elements and attributes
 */

// Allowed HTML tags for blog content
const ALLOWED_TAGS = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'hr',
  'ul', 'ol', 'li',
  'strong', 'b', 'em', 'i', 'u',
  'a', 'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'img', 'figure', 'figcaption'
];

// Allowed attributes for specific tags
const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
  td: ['colspan', 'rowspan'],
  th: ['colspan', 'rowspan'],
};

/**
 * Sanitizes HTML content by removing potentially dangerous elements and attributes
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(html: string): string {
  // Create a temporary DOM element to parse the HTML
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  
  // Recursively sanitize all elements
  sanitizeNode(template.content);
  
  return template.innerHTML;
}

function sanitizeNode(node: Node): void {
  const childNodes = Array.from(node.childNodes);
  
  for (const child of childNodes) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const element = child as Element;
      const tagName = element.tagName.toLowerCase();
      
      // Remove disallowed tags but keep their text content
      if (!ALLOWED_TAGS.includes(tagName)) {
        // For script and style tags, remove completely
        if (tagName === 'script' || tagName === 'style') {
          element.remove();
          continue;
        }
        // For other disallowed tags, replace with text content
        const textContent = element.textContent || '';
        const textNode = document.createTextNode(textContent);
        element.replaceWith(textNode);
        continue;
      }
      
      // Remove disallowed attributes
      const allowedAttrs = ALLOWED_ATTRS[tagName] || [];
      const attrs = Array.from(element.attributes);
      
      for (const attr of attrs) {
        if (!allowedAttrs.includes(attr.name)) {
          element.removeAttribute(attr.name);
        } else {
          // Additional sanitization for specific attributes
          if (attr.name === 'href' || attr.name === 'src') {
            // Only allow http, https, and relative URLs
            const value = attr.value.toLowerCase().trim();
            if (value.startsWith('javascript:') || value.startsWith('data:') || value.startsWith('vbscript:')) {
              element.removeAttribute(attr.name);
            }
          }
        }
      }
      
      // Add rel="noopener noreferrer" to external links
      if (tagName === 'a' && element.getAttribute('target') === '_blank') {
        element.setAttribute('rel', 'noopener noreferrer');
      }
      
      // Recursively sanitize child nodes
      sanitizeNode(element);
    }
  }
}

/**
 * Iteratively applies a regex replacement until no more matches are found
 * This prevents bypass techniques that use nested patterns
 */
function iterativeReplace(str: string, pattern: RegExp, replacement: string, maxIterations: number = 10): string {
  let result = str;
  let iteration = 0;
  let previousResult = '';
  
  while (result !== previousResult && iteration < maxIterations) {
    previousResult = result;
    result = result.replace(pattern, replacement);
    iteration++;
  }
  
  return result;
}

/**
 * Server-side safe sanitizer that doesn't use DOM
 * Uses iterative regex-based sanitization to prevent bypass attacks
 */
export function sanitizeHtmlSafe(html: string): string {
  let sanitized = html;
  
  // Remove script tags and their content (iteratively to handle nested cases)
  // Pattern handles various whitespace, attributes, and malformed tags
  sanitized = iterativeReplace(
    sanitized,
    /<\s*script[\s\S]*?(?:<\s*\/\s*script[\s\S]*?>|$)/gi,
    ''
  );
  
  // Remove any remaining script opening tags
  sanitized = iterativeReplace(
    sanitized,
    /<\s*script[^>]*>/gi,
    ''
  );
  
  // Remove style tags and their content
  sanitized = iterativeReplace(
    sanitized,
    /<\s*style[\s\S]*?(?:<\s*\/\s*style[\s\S]*?>|$)/gi,
    ''
  );
  
  // Remove any remaining style opening tags
  sanitized = iterativeReplace(
    sanitized,
    /<\s*style[^>]*>/gi,
    ''
  );
  
  // Remove on* event handlers (iteratively)
  sanitized = iterativeReplace(
    sanitized,
    /\s+on\w+\s*=\s*["'][^"']*["']/gi,
    ''
  );
  sanitized = iterativeReplace(
    sanitized,
    /\s+on\w+\s*=\s*[^\s>]*/gi,
    ''
  );
  
  // Remove javascript: urls (iteratively)
  sanitized = iterativeReplace(
    sanitized,
    /javascript\s*:/gi,
    ''
  );
  
  // Remove data: urls that could be used for XSS
  sanitized = iterativeReplace(
    sanitized,
    /data\s*:/gi,
    ''
  );
  
  // Remove vbscript: urls
  sanitized = iterativeReplace(
    sanitized,
    /vbscript\s*:/gi,
    ''
  );
  
  // Remove expression() (used in older IE for XSS)
  sanitized = iterativeReplace(
    sanitized,
    /expression\s*\(/gi,
    ''
  );
  
  return sanitized;
}
