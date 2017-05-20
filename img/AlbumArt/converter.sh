for jpg in *.jpg;
	do convert $jpg -resize 160x160+0+0 ${jpg%.*}.png;
done;
