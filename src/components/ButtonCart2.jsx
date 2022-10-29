
const ButtonCart2 = ({ children, leftIcon, rightIcon }) =>{
        return (
        <button className="button__cart">
            
            {leftIcon} {children} {rightIcon}
            
        </button>
        )
}

export default ButtonCart2

