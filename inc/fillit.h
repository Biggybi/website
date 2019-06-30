/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   fillit.h                                         .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: trikapou <marvin@le-101.fr>                +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2017/11/29 17:53:08 by trikapou     #+#   ##    ##    #+#       */
/*   Updated: 2018/10/17 16:46:43 by trikapou    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

#ifndef FILLIT_H
# define FILLIT_H

# include "../libft/inc/libft.h"
# include <unistd.h>
# include <fcntl.h>

typedef struct	s_fillit
{
	int		**tetrxy;
	int		ntetri;
	char	*map;
	int		mapx;
	int		mapl;
}				t_fillit;

int				clear_one(t_fillit fi, int n, int i);
int				place_tetri(t_fillit fi, int n, int m);
int				ft_nsq(int n);
int				h_sqrt(int n);
char			*build_map(int mapx);
int				get_tetri(int ac, char **av, t_fillit *fi);
int				**tetrxy_malloc(void);
#endif
