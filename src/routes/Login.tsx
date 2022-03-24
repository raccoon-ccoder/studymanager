import styled from "styled-components";

const LoginInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
`;

const LogoImg = styled.img`
    display: block;
    width: 160px;
    height: 160px;
    margin: 0px 0px 4rem;
    border: 3px solid white;
`;

const LoginBtn = styled.button`
    border: 2px solid white;
    border-radius: 4px;
    width: 10rem;
    height: 2.2rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: black;
    cursor: pointer;
`;

const GoogleImg = styled.img`
    margin-left: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    background-color: black;
`;

const BtnText = styled.div`
    text-align: center;
    margin-right: 0.4rem;
    height: 1rem;
    color: white;
`;

function Login() {
    
    return (
        <LoginInner>
            <LogoImg />
            <LoginBtn>
                <GoogleImg />
                <BtnText>Login With Google</BtnText>
            </LoginBtn>
        </LoginInner>
    );
}

export default Login;