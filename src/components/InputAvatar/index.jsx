import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 148px;
    height: 148px;
    position: absolute;
    bottom: -46px;
    right: 32px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`
const WrapperInputAvatar = styled.div`
    position: relative;
    height: 100%;
`

function InputAvatar() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <WrapperInputAvatar>
            <input type="file" onChange={handlePreviewAvatar} />

            {avatar && <Image className="avatar" src={avatar.preview} alt="" />}
        </WrapperInputAvatar>
    )
}

export default InputAvatar
