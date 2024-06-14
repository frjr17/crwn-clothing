import { ButtonContainer, GoogleSignInButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType) => {
    switch (buttonType) {
        case BUTTON_TYPE_CLASSES['google']:
            return GoogleSignInButton;
        case BUTTON_TYPE_CLASSES['inverted']:
            return InvertedButton;
        default:
            return ButtonContainer;
    }
}
export default function Button({ children, buttonType, ...otherProps }) {

    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
}

