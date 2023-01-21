import {
	FaBandcamp,
	FaGlobe,
	FaYoutube,
	FaSoundcloud,
	FaTwitter,
} from 'react-icons/fa'
import BoothSVG from '../public/assets/icons/booth.svg'
import PixivSVG from '../public/assets/icons/pixiv.svg'
import FanboxSVG from '../public/assets/icons/fanbox.svg'

export default function LinkIcon(props) {
    const link = props['linkObj']

    if (link.toString().includes('bandcamp')) {
        return <FaBandcamp className={props.className} />
    } else if (
        link.toString().includes('youtube') ||
        link.toString().includes('youtu.be')
    ) {
        return <FaYoutube className={props.className} />
    } else if (link.toString().includes('twitter')) {
        return <FaTwitter className={props.className} />
    } else if (link.toString().includes('soundcloud')) {
        return <FaSoundcloud className={props.className} />
    } else if (link.toString().includes('vgmdb')) {
        return <span className={props.className}>VGMdb</span>
    } else if (link.toString().includes('booth.pm')) {
        return <BoothSVG className={props.className} />
    } else if (link.toString().includes('pixiv')) {
        return <PixivSVG className={props.className} />
    } else if (link.toString().includes('fanbox.cc')) {
        return <FanboxSVG className={props.className} />
    } else {
        return <FaGlobe className={props.className} />
    }
}