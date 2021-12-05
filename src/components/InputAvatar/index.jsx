import { useState, useEffect } from "react";
import styled from "styled-components";
import { useInsert } from "../../constants/store";

const Img = styled.img`
    width: 148px;
    height: 148px;
    position: absolute;
    bottom: -65px;
    right: 60px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const WrapperInputAvatar = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    input {
        position: absolute;
        top: 20px;
        left: 30px;
    }
`;

function InputAvatar() {
    const [avatar, setAvatar] = useState();
    const [state, actions] = useInsert();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar, state.image]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
        actions.setImage(file.preview);
    };

    return (
        <WrapperInputAvatar>
            <input type='file' onChange={handlePreviewAvatar} />

            {state.image && <Img className='avatar' src={state.image} alt='' />}
        </WrapperInputAvatar>
    );
}

export default InputAvatar;
