import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  base: "./",
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, '/src/assets/images'),
      '@icons': path.resolve(__dirname, '/src/assets/icons'),
      '@sharing/organisms': path.resolve(__dirname, '/src/ui/sharing/organisms/index.js'),
      '@sharing/molecules': path.resolve(__dirname, '/src/ui/sharing/molecules/index.js'),
      '@sharing/atoms': path.resolve(__dirname, '/src/ui/sharing/atoms/index.js'),
      '@atoms': path.resolve(__dirname, '/src/ui/home/atoms/index.js'),
      '@molecules': path.resolve(__dirname, '/src/ui/home/molecules/index.js'),
      '@organisms': path.resolve(__dirname, '/src/ui/home/organisms/index.js'),
      '@mixins': path.resolve(__dirname, '/src/styles/mixins.js'),
      '@data': path.resolve(__dirname, '/src/logic/data'),
      '@schemas': path.resolve(__dirname, '/src/logic/schemas'),
      '@services': path.resolve(__dirname, '/src/logic/services'),
      '@handlers': path.resolve(__dirname, '/src/logic/handlers'),
      '@config': path.resolve(__dirname, '/src/logic/config.js'),
      '@hooks': path.resolve(__dirname, '/src/logic/utils/hooks/index.js'),
      '@hocs': path.resolve(__dirname, '/src/logic/utils/hooks/index.js'),
      '@utils': path.resolve(__dirname, '/src/logic/utils'),
      '@actions': path.resolve(__dirname, '/src/logic/actions'),
      '@constants': path.resolve(__dirname, '/src/logic/utils/constants'), 
      '@functions': path.resolve(__dirname, '/src/logic/utils/functions'), 
      '@store': path.resolve(__dirname, '/src/logic/store'), 
      '@reducer': path.resolve(__dirname, '/src/logic/reducer'), 
      '@contexts': path.resolve(__dirname, '/src/logic/contexts/index.js'), 
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@routes': path.resolve(__dirname, 'src/routes/index.js'),
    },
  },
})
