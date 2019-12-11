import styled from 'styled-components';

const Content = {};

export const LoginContent = styled.div`
    min-height: 660px;
    padding: 60px 68px 40px;
    margin-bottom:90px;
    background-color: rgba(0, 0, 0, 0.75);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0;
    padding: 20px 0 30px;
    width: 100%;
    min-width; 380px;
    margin: 0 auto
    max-width: 450px;

`;

    export const HibrydLogin = styled.div`
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -moz-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        padding: 60px 68px 40px;
    `;

        export const H1FormTitle = styled.h1`
            color: #fff;
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 28px;
        `;

        export const Form = styled.form`
            margin-bottom: 0;
        `;

            export const EmailFormInput = styled.div`
                padding-bottom:16px;
                max-width:100%;
                position:relative;
            `;

                export const InputPlacement = styled.div`
                    position:relative;

                `;

                    export const EmailFormControls = styled.div`
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        border-radius: 4px;
                        border: 0;
                        position:relative;
                    `;

                        export const LabelInputId = styled.label`
                            cursor: default;
                        `;

                            export const Input = styled.input`
                                background: #333;
                                -webkit-border-radius: 4px;
                                -moz-border-radius: 4px;
                                border-radius: 4px;
                                border: 0;
                                color: #fff;
                                height: 50px;
                                line-height: 50px;
                                padding: 16px 20px 0;
                                width: 100%;
                                box-sizing: border-box;
                                font-size: 16px;
                                border: solid 1px #8c8c8c;
                                -webkit-border-radius: 2px;
                                -moz-border-radius: 2px;
                                border-radius: 2px;
                                display: block;
                                -webkit-appearance: none;
                                &:valid{box-shadow: none};
                            `;

                            export const PlaceLabel = styled.label`
                                left: 20%;
                                position: absolute;
                                top: 50%;
                                left: 10px;
                                color: #8c8c8c;
                                font-size: 14px;
                                -webkit-transition: font 0.1s ease, top 0.1s ease, -webkit-transform 0.1s ease;
                                transition: font 0.1s ease, top 0.1s ease, -webkit-transform 0.1s ease;
                                -o-transition: font 0.1s ease, top 0.1s ease, -o-transform 0.1s ease;
                                -moz-transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -moz-transform 0.1s ease;
                                transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
                                transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease, -moz-transform 0.1s ease, -o-transform 0.1s ease;
                                -webkit-transform: translateY(-50%);
                                -moz-transform: translateY(-50%);
                                -ms-transform: translateY(-50%);
                                -o-transform: translateY(-50%);
                                transform: translateY(-50%);
                                cursor: default;
                            `;
Content.LoginContent = LoginContent;
Content.HibrydLogin = HibrydLogin;
Content.H1FormTitle = H1FormTitle;
Content.Form = Form;
Content.EmailFormInput = EmailFormInput;
Content.InputPlacement = InputPlacement;
Content.EmailFormControls = EmailFormControls;
Content.LabelInputId = LabelInputId;
Content.Input = Input;
Content.PlaceLabel = PlaceLabel;

export default Content;