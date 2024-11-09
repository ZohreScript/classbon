import { Size} from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase = {
    variant?: Variant;
    size?: Size;
    isDisabled?: boolean;
    className?: string
}