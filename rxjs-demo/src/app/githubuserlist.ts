import { User } from './user';

export class GithubUserList {
	total_count: Number;
	incomplete_results: Boolean;
	items: Array<User> = [];
}

