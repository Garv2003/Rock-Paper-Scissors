import styled from "styled-components";

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: 0.5em;
  min-width: 128px;
  padding: 0.7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  :hover {
    background: white;
    color: #101a3f;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
}

function Button({
  children,
  ...props
}: ButtonProps & React.HTMLAttributes<HTMLDivElement>) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export const WhiteButton = styled(ButtonStyled)`
  background: white;
  color: #101a3f;
  min-width: 220px;
`;

export default Button;
