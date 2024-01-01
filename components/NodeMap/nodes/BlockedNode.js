import { useDispatch } from 'react-redux';
import { Toggle } from '../../Toggle';
import { ResourceDetail } from "@/components/resource/ResourceDetail";
import { toggleBlocked } from '../../../redux/gameStateReducer/gameStateReducer';

export const BlockedNode = ({ nodeState, blockedResource, id, children }) => {
    const dispatch = useDispatch()

    const isBlocked = nodeState === "blocked" || nodeState === "blocked-active";

    if (!isBlocked) return <div>{children}</div>

    const isActive = nodeState === "blocked-active";

    return (
        <div>
            <div>Blocked</div>
            <ResourceDetail resource={blockedResource} />

            <div className="my-2 flex justify-between">
                <Toggle
                    isToggle={isActive}
                    toggle={() => dispatch(toggleBlocked(id))}
                    disabled={false} />
            </div>
        </div>
    )
}