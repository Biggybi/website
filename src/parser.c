/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   parser.c                                         .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <trikapou@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/23 10:31:13 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/16 21:31:56 by trikapou    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

#include "../inc/fillit.h"

int		*tetrxy_pos(char *s)
{
	int		i;
	int		j;
	int		*tab;

	i = -1;
	j = 0;
	tab = (int *)malloc(sizeof(int) * 5);
	while (++i < 20 && j < 4)
		if (s[i] == '#')
			tab[j++] = i;
	i = 4;
	while (i-- > 0)
		tab[i] = tab[i] - tab[0];
	i = 4;
	while (i-- > 0)
		if (tab[i] % 5 == 4)
		{
			j = -1;
			i = 4;
			while (++j < 4)
				tab[j]++;
		}
	return (tab);
}

int		hash_nb(char *s)
{
	int		i;
	int		n;
	int		m;

	i = -1;
	n = 0;
	m = 0;
	while (++i < 20)
	{
		if (s[i] == '#' && ++n)
		{
			if (s[i - 1] != '#' && s[i + 1] != '#' && \
					s[i - 5] != '#' && s[i + 5] != '#')
				return (0);
			if (s[i - 1] == '#')
				m++;
			if (s[i + 1] == '#')
				m++;
			if (s[i - 5] == '#')
				m++;
			if (s[i + 5] == '#')
				m++;
		}
	}
	return ((n == 4) && (m >= 6));
}

int		check_tetri_file(int fd, int ntetri, int **tetrxy)
{
	char	tmp[20];
	char	c;
	int		i;

	i = -1;
	while (++i >= -1 && ntetri < 27)
	{
		if (read(fd, &c, 1) == 0)
			return (i >= 19 ? ntetri : 0);
		if (i == 20 && c != '\n')
			return (0);
		if (i == 20)
			i = -1;
		if (i != -1 && i % 5 == 4 && c != '\n')
			return (0);
		if (i != -1 && i % 5 < 4 && c != '.' && c != '#')
			return (0);
		if (i != -1 && i < 20)
			tmp[i] = c;
		if (i == 19 && (!(hash_nb(tmp))))
			return (0);
		if (i == 19 && (ntetri++) >= 0)
			tetrxy[ntetri - 1] = tetrxy_pos(tmp);
	}
	return (0);
}

int		ft_idaccat(int **tetrxy, int p, int ntetri)
{
	int		i;
	int		c;

	i = -1;
	c = 'A';
	while (++i < ntetri)
		tetrxy[i][p] = c++;
	return (0);
}

int		get_tetri(int ac, char **av, t_fillit *fi)
{
	int		fd;

	if (ac != 2)
		return (0);
	if (!(fd = open(av[1], O_RDONLY)))
		return (0);
	if (!(fi->tetrxy = tetrxy_malloc()))
		return (0);
	if (!(fi->ntetri = check_tetri_file(fd, 0, fi->tetrxy)))
		return (0);
	fi->tetrxy[fi->ntetri] = 0;
	ft_idaccat(fi->tetrxy, 4, fi->ntetri);
	if (fd)
		close(fd);
	return (1);
}
