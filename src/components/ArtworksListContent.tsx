import { useEffect, useState } from "react";
import type { DogProps } from "../types";
import ArtworkPreview from "./ArtworkPreview";
import styled from "styled-components";

const DogsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export default function ArtworksListContent() {
    const [dogs, setDogs] = useState<DogProps[]>([]);

    useEffect(() => {
        async function getDogs() {
            const res = await fetch(
                "https://dogapi.dog/api/v2/breeds?page[size]=100"
            );

            const jsonRes = await res.json();

            setDogs(jsonRes.data);
        }

        getDogs().catch((e) => console.error(e));
    }, []);

    return (
        <div>
            <h1>Dog Breeds</h1>

            <DogsGrid>
                {dogs.map((dog) => {
                    return (
                        <ArtworkPreview
                            key={dog.id}
                            dog={dog}
                        />
                    );
                })}
            </DogsGrid>
        </div>
    );
}