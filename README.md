# ID360 Consulting

Sitio web corporativo de ID360 Consulting desarrollado con React, TypeScript, Tailwind CSS y Vite.

## 🚀 Despliegue Automático

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages cada vez que se hace push a la rama `main`.

### Configuración de GitHub Pages

1. **Configuración del repositorio**: 
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`

2. **Workflow automático**:
   - Cada push a `main` activa el workflow de GitHub Actions
   - Se construye automáticamente la aplicación
   - Se despliega en GitHub Pages

### URLs
- **Sitio en vivo**: https://360consulting.github.io/
- **Repositorio**: https://github.com/360consulting/360consulting.github.io

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Limpiar carpeta de build
npm run clean
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── home/           # Componentes de la página principal
│   ├── services/       # Componentes de servicios
│   ├── contact/        # Componentes de contacto
│   ├── layout/         # Componentes de layout (nav, footer)
│   └── ui/             # Componentes UI reutilizables
├── pages/              # Páginas principales
├── entities/           # Tipos y entidades TypeScript
├── lib/                # Utilidades y configuraciones
└── assets/             # Recursos estáticos (imágenes, logos)
```

## 🎨 Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Vite** - Build tool y dev server
- **React Router** - Enrutamiento
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes UI

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build
- `npm run clean` - Limpiar carpeta docs

## 🔧 Configuración de Build

El proyecto está configurado para generar el build en la carpeta `docs/` para compatibilidad con GitHub Pages.

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    outDir: 'docs'
  }
});
```

## 🚀 Workflow de Despliegue

El archivo `.github/workflows/deploy.yml` contiene la configuración para:

1. **Checkout** del código
2. **Setup** de Node.js 18
3. **Instalación** de dependencias
4. **Limpieza** de builds anteriores
5. **Construcción** de archivos estáticos
6. **Despliegue** a GitHub Pages

---

Desarrollado por ID360 Consulting 