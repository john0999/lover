# 1. Instala Git desde https://git-scm.com/downloads

# 2. Abre terminal/comandos y ejecuta:
git config --global user.name "TuNombre"
git config --global user.email "tuemail@example.com"

# 3. Crea una carpeta en tu computadora
mkdir para-keyla
cd para-keyla

# 4. Copia los archivos a esta carpeta
# (index.html y README.md)

# 5. Inicializa el repositorio
git init

# 6. Añade los archivos
git add .

# 7. Haz el primer commit
git commit -m "Primera versión"

# 8. Conecta con GitHub (reemplaza USER con tu usuario)
git remote add origin

# 9. Sube los archivos
git branch -M main
git push -u origin main