echo "=====Transpilling and Compiling Application===="
npm run build
echo "=====Replacing file===="
rm ./server/static/app.min.js
cp ./dist/app.min.js ./server/static/
echo "=====Done :) ===="