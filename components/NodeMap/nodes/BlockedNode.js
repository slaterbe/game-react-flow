import { useDispatch } from 'react-redux';
import { Toggle } from '../../Toggle';
import { ResourceDetail } from "@/components/resource/ResourceDetail";
import { toggleBlocked } from '../../../redux/gameStateReducer/gameStateReducer';

export const BlockedNode = ({ nodeState, blockedResource, id, children }) => {
    const dispatch = useDispatch()

    const isBlocked = nodeState === "blocked";

    if (!isBlocked) return <div className='h-full'>{children}</div>

    return (
        <div>
            <div className='m-2'>Blocked</div>
            <ResourceDetail resource={blockedResource} />
        </div>
    )
}