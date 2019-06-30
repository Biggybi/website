# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: trkapous <trkapous@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2014/11/25 16:17:17 by trkapous          #+#    #+#              #
#    Updated: 2018/10/06 15:24:02 by trikapou    ###    #+. /#+    ###.fr      #
#    Updated: 2018/02/20 14:57:55 by trikapou    ###    #+. /#+    ###.fr      #
#                                                                              #
# **************************************************************************** #

NAME = fillit

SRC = $(NAME).c \
	  init.c \
	  parser.c \
	  place.c
SRCF = src/
SRCCF = $(addprefix $(SRCF), $(SRC))

HDRF = inc/
HDRRF = $(HDRF)$(NAME).h

LIB = Libft/libft.a

CC = clang
FLAG = -Wall -Wextra -Werror
DEL = rm -f
FDEL = rm -rf

TRASH = $(HDR:.h=.h.gch)

OBJ = $(SRC:.c=.o)
OBJF = obj/
OBJOF = $(addprefix $(OBJF), $(OBJ))
OBJX = mkdir -p $(OBJF) ; mv $(OBJ) $(OBJF) 2> /dev/null

TEST = test
TESTF = test/

all: $(NAME)

$(NAME):
	@$(DEL) $(TRASH)
	@$(CC) -c $(FLAG) $(SRCCF) -I $(HDRF)
	@$(OBJX)
	@$(CC) $(FLAG) $(OBJOF) $(LIB) -o $(NAME)
	@echo
	@echo "make -> $(NAME) created"
	@echo

clean: start
	@$(FDEL) $(OBJF) $(OBJ)
	@$(DEL) $(TRASH)
	@echo
	@echo "clean -> *.o && $(TRASH) deleted"
	@echo

fclean: clean exclean
	@$(DEL) $(NAME) $(TRASH) test.out
	@$(DEL) $(TRASH)
	@echo
	@echo "fclean -> $(TRASH) and $(NAME) deleted"
	@echo

re: fclean all
	@echo
	@echo "re -> $(NAME) reloaded"
	@echo

ex: start $(NAME)
	@echo "\n----------------"
	@echo "--- Bin exec ---"
	@echo "----------------\n"
	@chmod u+x $(NAME)
	@./fillit $(TESTF)$(TEST)

start:
	@echo "################"
	@echo "### MAKEFILE ###"
	@echo "################"

.PHONY: all clean fclean exclean re
