import styled from "styled-components";
import type { DogProps } from "../types";

const DogCard = styled.div`
    background-color: #29264A;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    color: #F5F3FF;

    img {
        width: 100%;
        max-width: 300px;
        height: 300px;
        object-fit: contain;
        border-radius: 8px;
    }

    h2 {
        color: #F5F3FF;
        margin-bottom: 8px;
    }

    p {
        color: #C4B5FD;
        margin: 8px 0;
    }
`;

export default function ArtworkPreview(
    { dog }: { dog: DogProps }
) {
    return (
        <DogCard>
            <h2>{dog.attributes.name}</h2>

            <p>
                Life Span: {dog.attributes.life.min} - {dog.attributes.life.max} years
            </p>

            <img
                src={dog.attributes.images[0].medium}
                alt={dog.attributes.name}
            />

            <p>{dog.attributes.description}</p>
        </DogCard>
    );
}