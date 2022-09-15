import { AuthContainer, AuthSection, AuthTittleWrapper, RegisterForm } from 'components'
import Media from 'react-media';

export const RegisterPage = () => {


    return (
        <AuthSection className='register-section'>
            <AuthContainer className='container register-page-container'>

                <Media query="(min-width: 768px)" render={() =>
                    (
                        <AuthTittleWrapper>
                            <h2>Finance App</h2>
                        </AuthTittleWrapper>
                    )}
                />
                
                <RegisterForm/>
                
            </AuthContainer>
        </AuthSection>
    )
}