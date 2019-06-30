/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   fillit.c                                         .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <marvin@le-101.fr>                +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/23 15:32:01 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/17 17:26:27 by trikapou    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

#include "../inc/fillit.h"

int		file_error(int n)
{
	if (n == 0)
		ft_putendl("error");
	exit(0);
}

int		recu(t_fillit fi, int n)
{
	int i;

	i = -1;
	while (++i != fi.mapl)
	{
		if (n == fi.ntetri)
			return (1);
		if ((place_tetri(fi, n, i)))
		{
			if (recu(fi, n + 1))
				return (1);
			clear_one(fi, n, i);
		}
	}
	return (0);
}

int		fillit(int ac, char **av)
{
	t_fillit	fi;
	int			n;

	if (!(get_tetri(ac, av, &fi)))
		file_error(0);
	fi.mapx = h_sqrt(fi.ntetri * 4);
	fi.mapl = ft_nsq(fi.mapx);
	fi.map = build_map(fi.mapx);
	n = 0;
	while (!(recu(fi, n)))
	{
		fi.mapx++;
		fi.mapl = ft_nsq(fi.mapx);
		free(fi.map);
		fi.map = build_map(fi.mapx);
	}
	ft_putendl(fi.map);
	return (1);
}

int		main(int ac, char **av)
{
	if (!(fillit(ac, av)))
	{
		ft_putendl("file error");
		return (1);
	}
	return (0);
}
