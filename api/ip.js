/*!
 * ip -- A very simple endpoint to get your global IP address
 * Copyright (C) 2021  Nikita Karamov
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { getClientIp } from "@supercharge/request-ip";

/**
 * Handles request and returns user's IP address in response
 *
 * @param {import("@vercel/node").VercelRequest} req
 * @param {import("@vercel/node").VercelResponse} res
 */
export default (req, res) => {
	res.setHeader("Content-Type", "text/plain");

	if (req.method !== 'GET') {
		res.status(405).send("Method not allowed.");
		return;
	}

	const ip = getClientIp(req);
	res.status(ip ? 200 : 404).send(ip ? ip : "0.0.0.0");
}
