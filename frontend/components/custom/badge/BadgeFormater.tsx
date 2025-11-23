import {Badge} from "@/components/ui/badge";

interface Props {
    success?: string;
    warning?: string;
    outline?: string;


}

export function BadgeFormater(props: Props) {
    return (
        <div>
            {props?.success?.trim() && <Badge variant="success">{props?.success}</Badge>}
            {props?.warning?.trim() && <Badge variant="warning">{props?.warning}</Badge>}
            {props?.outline?.trim() && <Badge variant="outline">{props?.outline}</Badge>}
        </div>
    );
}

