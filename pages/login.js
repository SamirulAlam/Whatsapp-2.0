import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";

function Login() {
    const signIn=()=>{

    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" />
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container=styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    background-color:whitesmoke;
`;

const LoginContainer=styled.div`
    padding:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    border-radius:5px;
    box-shadow:0px 4px 14px -3px rgba(0, 0, 0, 0.7); 
`;

const Logo=styled.img`
    height:150px;
    width:200px;
    margin-bottom:50px;
`;