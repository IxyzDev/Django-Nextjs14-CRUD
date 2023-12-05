# Desafío de Desarrollo de Blacknexus

## Objetivo del Desafío

Desarrollar una aplicación de registro y visualización de eventos. Este desafío tiene como finalidad evaluar sus habilidades en desarrollo de software, especialmente en Python y Django para el backend, y en el frontend utilizando tecnologías como React o HTML/CSS/JS. Además, queremos ver sus habilidades en la organización del código, documentación y presentación oral a través de un video explicativo.

## Requisitos del Desafío

1. **Backend (Django):**
   - Modelo de datos para "Evento" con campos como título, descripción, fecha y ubicación.
   - API RESTful para operaciones CRUD de eventos.
   - Pruebas unitarias para el API.

2. **Frontend:**
   - Interfaz para agregar y mostrar eventos.
   - Interacción con el backend para operaciones CRUD.

3. **Control de Versiones:**
4. - Uso de Git con prácticas adecuadas de commits.
   - README con instrucciones de instalación y ejecución.

## Instrucciónes de Instalación y Ejecución

Para instalar y ejecutar un proyecto que utiliza Django para el backend y Next.js 14 para el frontend, primero debes asegurarte de tener instalados los siguientes requisitos en tu sistema:

**Requisitos generales:**

1. **Python:** Asegúrate de tener Python 3 instalado en tu sistema. Puedes descargarlo desde [el sitio web oficial de Python](https://www.python.org/downloads/).

2. **Node.js:** Necesitas Node.js y npm (el administrador de paquetes de Node.js) instalados. Puedes descargarlos desde [el sitio web oficial de Node.js](https://nodejs.org/).

**Instrucciones para el Backend (Django):**

1. **Clonar el repositorio:**
   - Al clonar el repositorio del proyecto, este debe contener la carpeta del backend de Django.

2. **Crear un entorno virtual (opcional pero recomendado):**
   - En la carpeta del backend, crea un entorno virtual (virtual environment). Puedes hacerlo con el siguiente comando:
   
     ```
     python -m venv env
     ```

   - Activa el entorno virtual:
   
     - En Windows:
       ```
       env\Scripts\activate
       ```
     - En macOS y Linux:
       ```
       source env/bin/activate
       ```

3. **Instalar las dependencias:**
   - Asegúrate de estar en la carpeta del backend y ejecuta el siguiente comando para instalar las dependencias del proyecto desde el archivo `requirements.txt`:

     ```
     pip install -r requirements.txt
     ```

4. **Configurar la base de datos:**
   - Configura la base de datos en el archivo `settings.py` del proyecto Django.

5. **Migraciones y aplicar esquema de base de datos:**
   - Realiza las migraciones de la base de datos con el siguiente comando:

     ```
     python manage.py makemigrations
     python manage.py migrate
     ```

6. **Ejecutar el servidor de desarrollo:**
   - Inicia el servidor de desarrollo de Django con el siguiente comando:

     ```
     python manage.py runserver
     ```

   - El backend estará disponible en `http://localhost:8000/`.

**Instrucciones para el Frontend (Next.js 14):**

1. **Clonar el repositorio:**
   - Al clonar el repositorio del proyecto, este debe contener la carpeta del frontend de Next.js.

2. **Instalar las dependencias:**
   - Abre una terminal en la carpeta del frontend y ejecuta el siguiente comando para instalar las dependencias de Node.js:

     ```
     npm install
     ```

3. **Ejecutar la aplicación de desarrollo:**
   - Una vez que se completen las instalaciones, ejecuta el siguiente comando para iniciar la aplicación de desarrollo:

     ```
     npm run dev
     ```

   - El frontend estará disponible en `http://localhost:3000/`.
