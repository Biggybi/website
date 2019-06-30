/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   recu.c                                           .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <trikapou@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/23 10:31:13 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/17 17:28:25 by trikapou    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

#include "../inc/fillit.h"

int		get_z(t_fillit fi, int n, int i)
{
	int		z;

	z = -1;
	if (fi.mapx <= 4)
		z = fi.tetrxy[n][i] + ((fi.mapx - 4) * (fi.tetrxy[n][i] / 4));
	else if (i == 0)
		z = fi.tetrxy[n][i];
	else
		z = fi.tetrxy[n][i] + ((fi.mapx - 4) * (fi.tetrxy[n][i] / 4));
	return (z);
}

int		clear_one(t_fillit fi, int n, int i)
{
	int		k;

	k = 0;
	--i;
	while (fi.map[++i] && k != 4)
		if (fi.map[i] == fi.tetrxy[n][4])
		{
			fi.map[i] = '.';
			k++;
		}
	return (0);
}

int		place_tetri(t_fillit fi, int n, int m)
{
	int		i;
	int		z;

	i = -1;
	while (++i < 4)
	{
		z = get_z(fi, n, i) + m;
		if (z > fi.mapl + fi.mapx - 1 || fi.map[z] != '.'\
				|| !fi.map[z] || z < 0)
			return (clear_one(fi, n, 0));
		fi.map[z] = fi.tetrxy[n][4];
	}
	return (i = 4);
}
