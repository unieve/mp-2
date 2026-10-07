export type DogProps = {
    id: string;

    attributes: {
        name: string;
        description: string;

        life: {
            min: number;
            max: number;
        };

        images: {
            medium: string;
        }[];
    };
};
