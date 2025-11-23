import {Badge} from "@/components/ui/badge";

interface Props {
    value?: Boolean;


}

export function BadgeBoolean(props: Props) {
    return (
        <div>
            {props?.value === true && <Badge variant="success">Sim</Badge>}
            {props?.value === false && <Badge variant="warning">Não</Badge>}
        </div>
    );
}

