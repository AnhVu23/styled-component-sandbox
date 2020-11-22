/**
*
* Button component
*
* @author Anh Vu <vu.haianh291@gmail.com>
*
* @copyright Anh Vu
*/
import {PrimaryButton, SecondaryButton} from './button.style'
const CustomButton = ({text, onClick}) => {
    return (
        <PrimaryButton onClick={onClick}>
            {}
        </PrimaryButton>
    )
}

export default CustomButton

export {PrimaryButton, SecondaryButton}