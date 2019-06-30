/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   init.c                                           .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <trikapou@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/23 10:31:13 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/06 15:37:01 by trikapou    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

#include "../inc/fillit.h"

int		ft_nsq(int n)
{
	if (n < 0)
		n *= -1;
	if (n > 46340)
		return (-1);
	return (n * n);
}

int		h_sqrt(int n)
{
	while (ft_sqrt(n) == -1)
		n++;
	return (ft_sqrt(n));
}

char	*build_map(int mapx)
{
	char	*map;
	int		mapl;
	int		i;
	int		j;

	mapl = mapx * (mapx + 1);
	map = ft_strnew(mapl + 1);
	map = ft_memset(map, '.', mapl - 1);
	i = 0;
	j = -1;
	while (++j < mapl - 1)
		if (++i == mapx + 1)
		{
			map[j] = '\n';
			i = 0;
		}
	return (map);
}

int		**tetrxy_malloc(void)
{
	int		**tetrxy;
	int		n;

	if (!(tetrxy = (int **)malloc(sizeof(*tetrxy) * 27)))
		return (0);
	n = -1;
	while (++n < 27)
		if (!(tetrxy[n] = (int *)malloc(sizeof(**tetrxy) * 5)))
			return (0);
	tetrxy[27] = NULL;
	return (tetrxy);
}
