DIR=$(dirname $(realpath $0))
rm -rf ~/bigmarker.webrtc/node_modules/socket.io
cp -r $DIR ~/bigmarker.webrtc/node_modules/socket.io
cd ~/bigmarker.webrtc/node_modules/socket.io && npm install