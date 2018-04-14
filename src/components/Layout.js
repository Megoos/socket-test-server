import React, { Component } from 'react';
import io from 'socket.io-client';
const socketUrl = 'http://192.168.56.1:3231';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: null
        };
    }

    componentWillMount() {
        this.initSocket();
    }

    // подключение и инициализация сокета
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log('connected');
        });
        this.setState({ socket });
        console.log(socket);
    };

    render() {
        const { title } = this.props;
        return (
            <div className="container">
                {title}
            </div>
        );
    }
}

export default Layout;
