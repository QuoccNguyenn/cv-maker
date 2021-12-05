import styled from "styled-components";
import { useInsert } from "../../constants/store";

const WrapperFieldInfo = styled.div`
    padding: 24px 16px;
`;
const Label = styled.label`
    width: 100px;
    text-transform: capitalize;
    display: block;
    font-weight: 550;
    font-size: 14px;
`;
const InputGroup = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;

    & :last-child {
        flex: 1;
        padding: 4px 8px;
    }
`;
const Title = styled.h2`
    text-transform: uppercase;
    color: #2dbcad;
`;
const Input = styled.input`
    font-size: 16px;
    padding: 2px 16px;
    border-radius: 4px;
    border: none;
`;
const TextArea = styled.textarea`
    font-size: 16px;
    padding: 2px 16px;
    border-radius: 4px;
    border: none;
`;

function FieldInfo({ title, fields, types }) {
    const [state, actions] = useInsert();
    return (
        <WrapperFieldInfo>
            <Title>{title}</Title>
            {fields.map((field, index) => (
                <InputGroup key={index}>
                    <Label htmlFor={field}>{`${field}:`}</Label>
                    {types[index] === "textarea" ? (
                        <TextArea
                            id={field}
                            name={field}
                            value={state[field] ? state.field : ""}
                            onChange={actions.insert}
                        />
                    ) : (
                        <Input
                            id={field}
                            type={types[index]}
                            name={field}
                            value={state[field] ? state.field : ""}
                            onChange={actions.insert}
                        />
                    )}
                </InputGroup>
            ))}
        </WrapperFieldInfo>
    );
}

export default FieldInfo;
