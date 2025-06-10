# Basic Example: CI/CD with GitHub Actions

Este proyecto es una API básica cuyo objetivo principal es probar la integración de **GitHub Actions** para ejecutar tests automáticamente.

## Objetivos

- Implementar una API sencilla.
- Configurar un flujo de CI/CD usando GitHub Actions.
- Ejecutar tests automáticamente en cada push.

## Estructura del Proyecto

- `src/` — Código fuente de la API.
- `tests/` — Pruebas automatizadas.
- `.github/workflows/` — Configuración de GitHub Actions.

## Uso

1. Clona el repositorio.
2. Instala las dependencias.
3. Ejecuta los tests localmente:

    ```bash
    # Ejemplo
    npm test
    ```

4. Haz push para activar el workflow de GitHub Actions.

## CI/CD

Cada vez que se realiza un push request, GitHub Actions ejecuta los tests definidos en el proyecto para asegurar la calidad del código.

---

¡Modifica este README según las necesidades de tu proyecto!