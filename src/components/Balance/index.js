import {Text} from "./styles";
import {FormattedMessage} from "react-intl";

const Balance = ({balance}) => {
    return (
        <>
            <Text>
                <FormattedMessage id="form.currBalance"/>
                :{balance}
            </Text>
        </>
    )
}

export default Balance