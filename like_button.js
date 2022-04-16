'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// todo why it is not working
/*function Welcome(props) {
    return <h1>Привіт, {props.name}</h1>;
}*/

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(e(Welcome), domContainer);
// todo why it is not working
// ReactDOM.render(<LikeButton/>, domContainer);

// const body = document.querySelector("body");
/*const button = document.createElement("button");
const p = document.createElement("p");
p.innerHTML = "You liked this.";
button.addEventListener("click", () => {
    domContainer.removeChild(button);
    domContainer.appendChild(p)
});
button.innerHTML = "Like";
domContainer.appendChild(button);*/
