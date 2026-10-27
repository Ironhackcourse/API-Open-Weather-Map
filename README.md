# Weather App

Aplicación web de clima que muestra el tiempo actual en tiempo real utilizando la API de OpenWeatherMap.

## 📋 Descripción

Weather App es una aplicación web moderna construida con HTML5, CSS3 y JavaScript vanilla (ES Modules). Consume datos de la API de OpenWeatherMap para mostrar información meteorológica actualizada de una ubicación geográfica específica.

La interfaz utiliza un diseño **glassmorphism** (efecto cristal mate difuminado) con una tarjeta de dimensiones web optimizadas para pantallas de escritorio.

## 🚀 Características

- **Datos en tiempo real**: Obtiene información meteorológica actualizada mediante la API de OpenWeatherMap
- **Interfaz glassmorphism**: Diseño moderno con efecto cristal difuminado y fondos semitransparentes
- **Diseño responsivo**: Tarjeta principal de 620px adaptable a pantallas móviles (máximo 90vw)
- **Visualización de clima**: Temperatura, sensación térmica, descripción y estado del clima con iconos dinámicos
- **Cambio de unidades**: Botón para alternar entre °C y °F
- **Código modular**: Arquitectura basada en módulos ES (ECMAScript Modules)
- **Soporte multilingüe**: Idioma español para descripciones del clima (`lang=es`)

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica de la aplicación |
| CSS3 | Estilos con efectos glassmorphism y backdrop-filter |
| JavaScript ES6+ | Lógica de la aplicación con módulos ES |
| OpenWeatherMap API | Fuente de datos meteorológicos |

## 📁 Estructura del proyecto

```
Weather App/
├── index.html              # Página principal con estructura HTML
├── README.md               # Documentación del proyecto
├── AGENTS.md               # Directrices para agentes de OpenCode
├── .gitignore              # Archivos ignorados por Git
└── src/
    ├── css/
    │   └── style.css       # Estilos glassmorphism y layout
    └── js/
        ├── app.js          # Punto de entrada y inicialización
        ├── ui.js           # Renderizado de la interfaz de usuario
        └── weatherService.js # Servicio de consulta a la API
```

## 🔧 Instalación y uso

### Requisitos previos

- Navegador web moderno con soporte para ES Modules
- Conexión a internet (para consumir la API de OpenWeatherMap)

### Pasos para ejecutar

1. Clona el repositorio o descarga los archivos:
   ```bash
   git clone <URL-del-repositorio>
   cd Weather-App
   ```

2. Abre el archivo `index.html` en tu navegador web:
   ```bash
   # Con Live Server (VS Code)
   # O simplemente abre el archivo directamente
   open index.html
   ```

3. La aplicación cargará automáticamente y mostrará el clima actual para las coordenadas por defecto (Rubí, España).

## 📱 Uso

La aplicación se inicia automáticamente al cargar la página:

1. **Visualización inicial**: Se muestra el clima de la ubicación predeterminada (lat: 41.4856, lon: 2.0327 - Rubí, España)
2. **Cambio de unidades**: Haz clic en el botón `°F` para alternar entre Celsius y Fahrenheit
3. **Información mostrada**:
   - Nombre de la ciudad y país
   - Temperatura actual en grados grandes
   - Icono del estado del cielo
   - Descripción de las condiciones meteorológicas

## 🔌 API utilizada

**OpenWeatherMap Current Weather Data API**

- URL base: `https://api.openweathermap.org/data/2.5/weather`
- Parámetros de consulta:
  - `lat`: Latitud (por defecto: 41.4856)
  - `lon`: Longitud (por defecto: 2.0327)
  - `units`: Sistema de unidades (`metric` para Celsius)
  - `appid`: Clave de API
  - `lang`: Idioma de las descripciones (`es` para español)

### Datos mapeados desde la respuesta de la API

| Campo | Origen en API | Descripción |
|-------|---------------|-------------|
| `name` | `data.name` | Nombre de la ciudad |
| `country` | `data.sys.country` | Código del país |
| `temperature` | `data.main.temp` | Temperatura actual (°C) |
| `feelsLike` | `data.main.feels_like` | Sensación térmica (°C) |
| `description` | `data.weather[0].description` | Descripción del clima |
| `iconUrl` | `openweathermap.org/img/wn/{icon}@2x.png` | URL del icono del clima |

## 🏗️ Arquitectura del código

### Módulos JavaScript

#### `src/js/weatherService.js`
Exporta la función `fetchWeatherData(lat, lon)` que:
- Construye la URL de consulta a OpenWeatherMap usando concatenación de strings
- Realiza la petición con `fetch()`
- Valida la respuesta HTTP
- Mapea los datos de la API a un objeto estructurado
- Maneja errores con bloques `try/catch`

#### `src/js/ui.js`
Exporta la función `renderWeather(data)` que:
- Recibe el objeto de datos meteorológicos
- Actualiza los elementos del DOM de forma segura (verifica existencia antes de escribir)
- Modifica `#cityName`, `#currentTemp`, `#conditionText` y `#weatherIcon`

#### `src/js/app.js`
Punto de entrada principal:
- Importa `fetchWeatherData` y `renderWeather`
- Escucha el evento `DOMContentLoaded`
- Ejecuta la obtención y renderizado del clima al cargar la página

## 🎨 Diseño

La aplicación implementa un estilo **glassmorphism** con las siguientes características:

- **Fondo**: Gradiente oscuro azulado (`#0f172a`)
- **Tarjeta principal**: 620px de ancho, bordes redondeados (32px), sombra difuminada
- **Efecto cristal**: `backdrop-filter: blur(24px)` con fondo semitransparente (`rgba(255, 255, 255, 0.12)`)
- **Tipografía**: Sistema sans-serif con jerarquía visual clara
- **Temperatura**: Fuente grande (96px) para resaltar el dato principal
- **Iconos**: 110px con sombra para destacar visualmente

## 📄 Archivos de configuración

### AGENTS.md
Contiene las directrices del sistema para agentes de OpenCode, incluyendo reglas sobre el uso de herramientas nativas, estándares de código y configuración de idioma para explicaciones.

### .gitignore
Archivos y carpetas ignorados por el control de versiones Git:
```
.gitignore
AGENTS.md
README.md
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 👨‍💻 Autor

Desarrollado como aplicación de demostración de consumo de APIs meteorológicas con tecnologías web modernas.

---

**Nota**: Para usar la aplicación en producción, obtén tu propia clave de API en [OpenWeatherMap](https://openweathermap.org/api) y reemplaza la clave en `src/js/weatherService.js`.