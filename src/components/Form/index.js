import {useState} from "react";
import PropTypes from 'prop-types';
import {Button, Comment, Input, Row, Wrapper} from "./styles";
import {FormattedMessage} from "react-intl";

const Form = (props) => {
    const [form, setForm] = useState({
        value: '',
        date: new Date().toISOString().substring(0, 10),
        comment: '',
        isStarred: false
    })

    const onSubmit = (e) => {
        e.preventDefault()
        props.onChange(form)
        setForm({
            // виконуємо спред об'єкта форм, для збереження дати і очистки полів
            ...form,
            value: "",
            comment: ""
        })
        props.onCloseFormModal()
    }

    const onChange = (e) => {
        const {value, name} = e.target
        // class component мерджить данні, а функціональний ні, тож треба передавати форму повністю, і вже тоді міняти точково
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <Row>
                    <FormattedMessage id="form.placeholder">
                        {
                            placeholder => (
                                <Input
                                    name="value"
                                    type="number"
                                    placeholder={placeholder}
                                    value={form.value}
                                    onChange={onChange}
                                />
                            )
                        }
                    </FormattedMessage>
                    <Input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                    />
                </Row>
                <Row>
                    <Button>
                        <FormattedMessage id="form.saveButton"/>
                    </Button>
                    <Comment
                        name="comment"
                        value={form.comment}
                        onChange={onChange}
                    />
                </Row>
            </form>
        </Wrapper>
    )

}

Form.propTypes = {
    onChange: PropTypes.func
};

export default Form