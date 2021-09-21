import { ButtonHTMLAttributes } from 'react';

export interface IGenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

export interface IIconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}

export interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export interface IMovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}
export interface ISideBarProps {
  genres: IGenreResponseProps[]
  handleClickButton: Function
  selectedGenreId: number
}

export interface IContentProps {
  movies: IMovieProps[]
  selectedGenre: IGenreResponseProps
}