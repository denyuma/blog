import { NextPage } from "next"
import { parseISO, format } from 'date-fns';

type Props = {
	dateString: string
}

const Date: NextPage<Props> = ({ dateString }) => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default  Date