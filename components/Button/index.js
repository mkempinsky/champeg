const Button = (props) => {
    const {children, type, style, cursor} = props;
    return (
        <button {...props} className={type} style={style}>
            {children}
            <style jsx>
                {`
                    button {
                        background: #fff;
                        border: 1px solid #fff;
                        padding: 3px 15px;
                        height: 60px;
                        width: auto;
                        font-size: 20px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        min-width: 220px;
                    }
                    button:hover,
                    button:active {
                        transition: all 0.25s;
                        cursor: ${cursor
                            ? 'pointer'
                            : `url('/logo-favicon.png'),
                        auto`};
                    }
                    button:focus {
                        outline: 0;
                    }
                    button.brown {
                        background-color: var(--brown-300);
                        color: #fff;
                    }
                    button.brown:hover {
                        background-color: var(--brown-400);
                    }
                `}
            </style>
        </button>
    );
};
export default Button;
