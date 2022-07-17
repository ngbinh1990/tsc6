import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from '@mui/material';

import './service.css';

import tintuc01 from '../../assets/img/tintuc/IMAGE01.png';

import image01 from '../../assets/img/dichVu/IMAGE01.png';
import image02 from '../../assets/img/dichVu/IMAGE02.png';
import image03 from '../../assets/img/dichVu/IMAGE03.png';
import image04 from '../../assets/img/dichVu/IMAGE04.png';
import image05 from '../../assets/img/dichVu/IMAGE05.png';
import image06 from '../../assets/img/dichVu/IMAGE06.png';
import image07 from '../../assets/img/dichVu/IMAGE07.png';

const Service = () => {
	return (
		<>
			<Container>
				<Box className='service'>
					<Grid container spacing={2}>
						<Grid item md={9}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								DỊCH VỤ
							</Typography>
							<Stack
								divider={<Divider orientation='horizontal' flexItem />}
								spacing={2}>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image01}
										alt='green iguana'
										sx={{ margin: '10px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											QUẢN LÝ CHUNG CƯ
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											TSC6 nhận thức được mối quan tâm lớn nhất của các chủ sở
											hữu nhà chung cư đặt ra đối với công tác quản lý vận hành
											nhà chung cư, đó là: Hạn chế tối đa các rủi ro; vận hành
											an toàn hiệu quả; giảm thiểu chi phí; đảm bảo chất lượng
											dịch vụ; đảm bảo gia tăng giá trị bất động sản.
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image02}
										alt='green iguana'
										sx={{ margin: '10px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											QUẢN LÝ VĂN PHÒNG
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Chủ đầu tư và người sử dụng văn phòng luôn mong muốn có
											đơn vị quản lý chuyên nghiệp nhằm đảm bảo tòa nhà có tỉ lệ
											sử dụng cao, chi phí vận hành và bảo dưỡng tiết kiệm nhưng
											vẫn mang lại hiệu quả, an toàn, nâng giá trị bất động sản
											và vị thế các doanh nghiệp hoạt động trong tòa nhà.
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image03}
										alt='green iguana'
										sx={{ margin: '10px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											QUẢN LÝ BẤT ĐỘNG SẢN KHÁC
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Đội ngũ nhân sự của công ty TSC6 được đào tạo nghiệp vụ,
											chuyên môn quản lý vận hành, và nhiều kinh nghiệm thực tế.
											Chúng tôi đã khẳng định chất lượng dịch vụ quản lý cho
											nhiều loại hình bất động sản: tòa nhà hỗn hợp, trung tâm
											thương mại, căn hộ du lịch - nghỉ dưỡng...
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image04}
										alt='green iguana'
										sx={{ margin: '10px', width: '400px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											DỊCH VỤ LỄ TÂN
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Chuyên nghiệp, luôn lịch sự, thân thiện và nhiệt tình giải
											đáp những thắc mắc hay từ tốn xử lý những phàn nàn của
											khách hàng
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image05}
										alt='green iguana'
										sx={{ margin: '10px', width: '280px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											DỊCH VỤ KỸ THUẬT
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Phản ứng nhanh chóng, chuyên nghiệp. Mang đến sự yên tâm,
											tin cậy cho khách hàng
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image06}
										alt='green iguana'
										sx={{ margin: '10px', width: '345px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											DỊCH VỤ AN NINH
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Dịch vụ an ninh tòa nhà đảm bảo sự an toàn, thoải mái cho
											cư dân, khách hàng sống tại tòa nhà, văn phòng
										</Typography>
									</CardContent>
								</Card>
								<Card sx={{ display: 'flex' }} variant='none'>
									<CardMedia
										component='img'
										height='160'
										image={image07}
										alt='green iguana'
										sx={{ margin: '10px', width: '560px' }}
									/>
									<CardContent>
										<Typography gutterBottom variant='h6' component='div'>
											DỊCH VỤ VỆ SINH
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Dịch vụ vệ sinh tòa nhà sẽ giữ cho dáng vẻ tòa nhà luôn
											sạch sẽ, luôn sáng bóng ... tạo môi trường sống thoải mái
											cho cư dân, thu hút được khách hàng, đối tác của tòa nhà.
										</Typography>
									</CardContent>
								</Card>
							</Stack>
						</Grid>
						<Grid item md={3}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								TIN NỔI BẬT
							</Typography>
							<Card>
								<CardMedia
									component='img'
									height='160'
									image={tintuc01}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h6' component='div'>
										Hoạt động ủng hộ công tác phòng chống dịch COVID - 19 của
										công ty TSC6
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Hưởng ứng Lời kêu gọi của Đoàn Chủ tịch Ủy ban Trung ương
										MTTQ Việt Nam ngày 27/5/2021; Chương trình phát động của Uỷ
										ban MTTQ Việt Nam phường Nhân Chính và Ban quản trị nhà
										chung cư Diamond Flower.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Service;
