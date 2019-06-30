/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   get_next_line.c                                  .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <trikapou@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/23 10:31:13 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/02 17:33:50 by tris             ###   ########.fr       */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

int		put_tetrxy(int *tetrxy)
{
	int		i;
	int		j;

	i = -1;
	j = 0;
	while (++i < 20)
		if (i == tetrxy[j])
		{
			j++;
			ft_putchar('#');
		}
		else if (i % 5 == 4)
			ft_putchar('\n');
		else
			ft_putchar('.');
	ft_putchar('\n');
	return (0);
}

int		putall_tetrxy(int **tetrxy, int ntetri)
{
	int		i;
	int		pos;

	i = -1;
	pos = 0;
	while (++i < ntetri)
		put_tetrxy(tetrxy[i]);
	return (0);
}

void	printone(t_fillit fi)
{
	int		i;
	int		j;

	i = 0;
	while (fi.tetrxy[0][i] <= 6)
		i++;
	if (i == 4)
		fi.mapl = 6;
	else
	{
		i = 0;
		while (fi.tetrxy[0][i] <= 13)
			i++;
		if (i == 4)
			fi.mapl = 6;
	}
	fi.map = ft_strnew(i);
	i = -1;
	j = -1;
	while (++i < fi.mapl)
	{
		if (i == fi.tetrxy[0][++j])
			ft_putchar('#');
		else
			ft_putchar('.');
	}
}

void	ft_putsn(char *s, int n)
{
	ft_putstr(s);
	ft_putstr(" = ");
	ft_putnbr(n);
	ft_putendl("");
}
