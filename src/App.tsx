import ArtworksListContent from "./components/ArtworksListContent";
import styled from "styled-components";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    background-color: #17152B;
`;

export default function App() {
    return (
        <ParentDiv>
            <ArtworksListContent />
        </ParentDiv>
    );
}