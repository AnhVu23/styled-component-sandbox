/**
*
* Button component
*
* @author Anh Vu <vu.haianh291@gmail.com>
*
* @copyright Anh Vu
*/
import {Button} from './button.style'
const CustomButton = ({text, onClick}) => {
    return (
        <Button onClick={onClick}>
            <span>{text}</span>
        </Button>
    )
}

export default CustomButton