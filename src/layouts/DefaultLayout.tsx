import styled from "@emotion/styled";

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
    return <Container>{children}</Container>;
};

const Container = styled.main`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`;

export default DefaultLayout;
