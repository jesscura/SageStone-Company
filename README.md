
  # SageStone Inc (Copy)

  This is a code bundle for SageStone Inc (Copy). The original project is available at https://www.figma.com/design/bw3UVR8wfsDuARYcYsRS5W/SageStone-Inc--Copy-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Building for Production

  Run `npm run build` to create a production build. The output will be in the `build/` directory.
  
  To serve the production build locally:
  
  ```bash
  npm start
  ```
  
  This will start a static file server on port 8080.

  ## Deployment

  This application is designed for deployment on Railway.

  ### Railway Deployment Steps

  1. Connect your GitHub repository to Railway
  2. Railway will auto-detect the build settings:
     - Build Command: `npm run build`
     - Start Command: `npm start`
  3. Add any required environment variables in Railway dashboard (prefix with `VITE_` for client-side variables)
  4. Deploy and your application will be live
  