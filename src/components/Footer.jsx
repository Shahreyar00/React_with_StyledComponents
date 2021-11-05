import styled from "styled-components"


const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;
    @media only screen and (max-width: 480px) {
        height: 25%;

    }
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        padding: 10px;
        flex-direction: column;
        align-items: center;
        margin: 5px 0;
    }
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 20px;
    font-family: 'Lobster', cursive;
    @media only screen and (max-width: 480px) {
        margin-right: 10px;
        font-size: 14px;
    }
`;

const Copyright = styled.span`
    @media only screen and (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem><i class="fab fa-reddit-square fa-2x"></i></ListItem>
                    <ListItem><i class="fab fa-github-square fa-2x"></i></ListItem>
                    <ListItem><i class="fab fa-twitter-square fa-2x"></i></ListItem>
                    <ListItem><i class="fab fa-facebook-square fa-2x"></i></ListItem>
                </List>
                <List>
                    <ListItem>Group</ListItem>
                    <ListItem>Community</ListItem>
                    <ListItem>API</ListItem>
                </List>
                <Copyright>&copy; Agency 2021</Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer
