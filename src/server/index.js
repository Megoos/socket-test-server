var app = require('http').createServer();
var io = (module.exports.io = require('socket.io')(app));

var Docker = require('dockerode');
var docker = new Docker({ socketPath: '/var/run/docker.sock' });

const repo = 'ubuntu:16.04';

// const PORT = process.env.PORT || 3231;

// const SocketManager = require('./SocketManager');

// io.on('connection', SocketManager);

// app.listen(PORT, () => {
//   console.log('Connected to port:' + PORT);
// });


function checkImage(repo) {
    const image = docker.getImage(repo);
    image.inspect(function(err, data) {
        if (err) return console.error('failed to inspect image: ' + err);

        console.log('image ID: ' + data.Id);

        image.tag(
            {
                repo: repo,
                tag: 'latest'
            },
            (err, data) => {
                if (err) return console.error('failed to tag image: ' + err);
            }
        );
    });
}

// docker.pull(repo, function(err, stream) {
//     docker.modem.followProgress(stream, onFinished, onProgress);
//     function onFinished(err, output) {
//         if (err) return console.error('failed to pull image:', err);

//         console.log('done!');
//         checkImage(repo);
//     }
//     function onProgress(event) {
//         console.log('...');
//     }
// });
